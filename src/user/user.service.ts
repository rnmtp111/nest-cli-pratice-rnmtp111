import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class UserService {
    [x: string]: any;

    get(): string {
    return 'get user ok';
    }
    getOne(id: string): string {
         return `user ${id} get`;

    }
    postOne(body: any): string {
        return `post user ${body["try"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put user ${id} ${body["try"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet user ${id} ok`;
    }


}