import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from "../../entity/Candidate";

@Pipe({
  name: 'combinedSearchFilter'
})
export class CombinedSearchFilterPipe implements PipeTransform {

  transform(candidates: Candidate[],
            firstname: string,
            lastname: string,
            city: string,
            passport: string,
            company: string,
            email: string,
            phone: string): Candidate[] {
    if(!candidates || !firstname || !lastname || !city || !passport || !company || !email || !phone){
      return candidates;
    }
    return candidates.filter(candidate =>
      this.getData(candidate, firstname, "firstname") &&
      this.getData(candidate, lastname, "lastname") &&
      this.getData(candidate, city, "city") &&
      this.getData(candidate, passport, "passport") &&
      this.getData(candidate, company, "email") &&
      this.getData(candidate, phone, "phone")
    );
  }

  getData(candidate: Candidate, firstname:string, columnName: string): boolean {
    for(let i = 0; i < candidate.candidateAttributes.length; i++){
      if(candidate.candidateAttributes[i].attributeTypes.name.toLocaleLowerCase().match(columnName.toLocaleLowerCase()) &&
         candidate.candidateAttributes[i].value.toLocaleLowerCase().includes(firstname.toLocaleLowerCase()))
        return true;
    }
    return false;
  }

}
