import { IUser } from "./user";

export interface IModalProps {
    openModal: boolean;
    id?: number;
    user?: IUser | null;
} 