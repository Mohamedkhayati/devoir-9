import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  
})
export class SupplementsComponent implements OnInit {
  supplements : Supplement[];
  constructor(private supplementService: SupplementService,
              private router: Router,    
              public authService: AuthService)      {
    this.supplements = supplementService.listeSupplements();

    
  }
  ngOnInit(): void {

      
    
  }
  supprimersupplement(s: Supplement)
  {
  //console.log(p);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.supplementService.supprimerSupplement(s);
  }
  
}