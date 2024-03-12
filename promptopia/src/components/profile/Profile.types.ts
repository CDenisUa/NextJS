export interface ProfilePropTypes {
    name: string,
    description: string,
    data: any[],
    handleEdit: () => void,
    handleDelete: () => void,
}