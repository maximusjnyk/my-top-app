import styles from './Typography.module.css';
import { TypographyProps } from "./Typography.props";
import cn from 'classnames';

export const Typography = ({ children, size = 'm', className, ...props }: TypographyProps): JSX.Element => {
	return <p className={cn(styles.p, className, {
		[styles.s]: size === 's',
		[styles.m]: size === 'm',
		[styles.l]: size === 'l',
	})}{...props}>
		{children}
	</p>;
};

