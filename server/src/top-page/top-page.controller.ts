import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post, UseGuards, UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { IdValidationPipe } from '../pipes/id-validation.pipe';
import { NOT_FOUND_TO_PAGE_ERROR } from './top-page.constants';
import { PRODUCT_NOT_FOUND_ERROR } from '../product/product.constatnts';
import { JwtAuthGuards } from '../auth/guards/jwt.guards';


@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService) {
	}

	@UseGuards(JwtAuthGuards)
	@Post('create')
	async create(@Body() dto: CreateTopPageDto) {
		return this.topPageService.create(dto);
	}

	@UseGuards(JwtAuthGuards)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const page = await this.topPageService.findById(id);
		if (!page) {
			throw new NotFoundException(NOT_FOUND_TO_PAGE_ERROR);
		}
		return page;
	}

	@Get('byAlias/:alias')
	async getByAlias(@Param('alias') alias: string) {
		const page = await this.topPageService.findByAlias(alias);
		if (!page) {
			throw new NotFoundException(NOT_FOUND_TO_PAGE_ERROR);
		}
		return page;
	}

	@UseGuards(JwtAuthGuards)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedPage = await this.topPageService.deleteById(id);
		if (!deletedPage) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}
	}
	@UseGuards(JwtAuthGuards)
	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: CreateTopPageDto) {
		const updatePage = await this.topPageService.updateById(id, dto);
		if (!updatePage) {
			throw new NotFoundException(NOT_FOUND_TO_PAGE_ERROR);
		}
		return updatePage;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {
		return this.topPageService.findByCategory(dto.firstCategory);
	}
}
