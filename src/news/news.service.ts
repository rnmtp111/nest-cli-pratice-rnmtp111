import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class NewsService {
    [x: string]: any;

    get(): string {
    return 'get news ok';
    }
    getOne(id: string): string {
         return `news ${id} get`;

    }
    postOne(body: any): string {
        return `post news ${body["try"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put news ${id} ${body["try"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet news ${id} ok`;
    }


}