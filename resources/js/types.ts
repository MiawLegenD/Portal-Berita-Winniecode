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

    export interface PageProps<T = {}> {
        auth: {
            user: User;
        };
        mustVerifyEmail: boolean;
        status?: string;
        errors?: {
            name?: string;
            email?: string;
        };
        myBerita: {
            id: number;
            title: string;
            description: string;
            category: string;
            image?: string;
        };
        title: string;
    };