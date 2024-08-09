type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface TitlePropTypes {
    size?: TitleSize;
    className?: string;
    text: string;
}