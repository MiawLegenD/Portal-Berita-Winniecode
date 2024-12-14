export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    remember_token: string | null;
    created_at: Date;
    updated_at: Date;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
