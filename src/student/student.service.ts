import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class StudentService {
    [x: string]: any;

    get(): string {
    return 'get student ok';
    }
    getOne(id: string): string {
         return `student ${id} get`;

    }
    postOne(body: any): string {
        return `post student ${body["try"]} ok `;
    }
    Putuser(id: string,body: any): string {
        return `put student ${id} ${body["try"]} ok`;
    }
    Deleteuser(id: string): string {
        return `delet student ${id} ok`;
    }


}