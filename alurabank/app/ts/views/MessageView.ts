import { View } from './View';

export class MessageView extends View<string>{

    template(model: string){
        return `
            <div class="alert alert-info">${model}</div>
        `;
    } 
}