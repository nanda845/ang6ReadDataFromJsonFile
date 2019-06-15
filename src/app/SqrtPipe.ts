import { PipeTransform, Pipe } from "@angular/core";
@Pipe ({
    name : 'sqrt'
 })
export class SqrtPipe implements PipeTransform {
    // transform(val : number) : number {
    //     return Math.sqrt(val);
    //  }
    transform(val:any, search:string){
        if(search==''){
            return val
        }
        else{
            search=search.toLowerCase()
            return val.filter(data=>{
              return  data.Name.toLowerCase().startsWith(search)
            })
        }
    }
}
