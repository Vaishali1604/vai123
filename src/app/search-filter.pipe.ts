import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, input: string ): any {
    // if(!value)return null;
    //   if(!args)return value;
    //   args = args.toLowerCase();

      if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
    
  }

}
