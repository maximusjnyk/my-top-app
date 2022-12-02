import { Controller, HttpCode, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuards } from '../auth/guards/jwt.guards';
import { Multer } from 'multer';
import { FileElementResponse } from './dto/file.element.response';
import { FilesService } from './files.service';
import { MFile } from './mfile.class';

@Controller('files')
export class FilesController {
	constructor(
		private readonly filesService: FilesService
	) {
	}

	@Post('upload')
	@HttpCode(200)
	@UseGuards(JwtAuthGuards)
	@UseInterceptors(FileInterceptor('files'))
	async uploadFile(@UploadedFiles() file: Express.Multer.File ): Promise<FileElementResponse[]> {
		const saveArray: MFile[] = [new MFile(file)];
		if (file.mimetype.includes('image')) {
			const buffer = await this.filesService.convertToWebP(file.buffer);
			saveArray.push(new MFile({
				originalname: `${file.originalname.split('.')[0]}.webp`,
				buffer
			}));
		}
		return this.filesService.saveFiles(saveArray);
	}
}
