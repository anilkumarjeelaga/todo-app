import { Icategory } from './category';
import { ITag } from './tag';

export interface ITodo{
    _id: string,
    title:string,
    isCompleted:boolean,
    targetDate:string,
    tag:ITag[],
    category:Icategory
}