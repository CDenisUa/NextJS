export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type SizesType = { size: TitleSize; tag: string; className: string }[]

export interface TitlePropTypes {
    size?: TitleSize;
    className?: string;
    text: string;
}

