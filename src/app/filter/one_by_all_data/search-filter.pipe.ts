import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from "../../entity/Candidate";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(candidates: Candidate[], searchValue: string): Candidate[] {

    if(!candidates || !searchValue){
      return candidates;
    }
    return candidates.filter(candidate =>
      candidate.id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      candidate.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      this.isValueExists(candidate, searchValue)
    );
  }

  isValueExists(candidate: Candidate, searchValue: string): boolean{
    for(let i = 0; i < candidate.candidateAttributes.length; i++){
      if(candidate.candidateAttributes[i].value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        return true;
    }
    return false;
  }

}
