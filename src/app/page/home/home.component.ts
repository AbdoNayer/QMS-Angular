import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//For Translation
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allServices     : any = [];
  allCategory     : any = [];

  list            : any = [
    {
      id : 1,
      name : 'UI Developer',
      service: [
        {
          id : 10,
          name : 'Html5'
        },
        {
          id : 20,
          name : 'Css3'
        },
        {
          id : 30,
          name : 'JavaScript'
        },
        {
          id : 40,
          name : 'BootStrap'
        }
      ],
      subCategory: [
        {
          id : 100,
          name : 'Front-End Developer',
          service: [
            {
              id : 1000,
              name : 'Angular Js',
            },
            {
              id : 2000,
              name : 'Vue Js',
            },
            {
              id : 3000,
              name : 'React Js',
            },
          ],
          subCategory:[
            {
              id: 200,
              name: 'Back-End Developer',
              service: [
                {
                  id : 111,
                  name : 'PHP',
                },
                {
                  id : 222,
                  name : 'ASP Net',
                },
                {
                  id : 333,
                  name : 'Node Js',
                },
              ],
            },
          ]
        },
      ],
    },
    {
      id : 2,
      name : 'UX Desgin',
      service: [
        {
          id : 50,
          name : 'PhotoShop'
        },
        {
          id : 60,
          name : 'XD'
        },
        {
          id : 70,
          name : 'AI'
        },
      ],
      subCategory: [
        {
          id : 300,
          name : 'System Analysis',
          service: [
            {
              id : 4000,
              name : 'Process of Studying A Procedure',
            },
            {
              id : 5000,
              name : 'Business To Identify',
            },
            {
              id : 6000,
              name : 'Purposes And Create Systems',
            },
          ],
          subCategory:[
            {
              id: 400,
              name: 'Development',
              service: [
                {
                  id : 444,
                  name : 'PHP Create Systems',
                },
                {
                  id : 555,
                  name : 'ASP Net Business',
                },
                {
                  id : 666,
                  name : 'Node Js Systems',
                },
              ],
            },
          ]
        },
      ],
    },
  ]
  
  valError        = '';

  constructor(private router: Router) {}

  valServices(){

      if(this.allServices.length != 0){
        this.router.navigateByUrl('/branch');
        this.valError = '';
      }else{
        this.valError = localStorage.getItem('lang') === 'ar' ? 'يجب إختيار خدمة' : 'Enter Your Services';
        
      }

  }

  addItem(newItem: any, i:any) {

    let newObj    = { id : newItem.upItem.id, name : newItem.upItem.name }
    let arr       = this.allCategory.find((h:any) => h.id == newItem.upItem.id);
    let index     = this.allCategory.indexOf(arr);

    if (index === -1) {
      this.allCategory.push(newObj);
      this.allServices.push(newItem.item);
      localStorage.setItem("allser", JSON.stringify(this.allServices));
    }else{
      this.allServices.splice(i, 1);
      this.allServices.push(newItem.item);
      localStorage.setItem("allser", JSON.stringify(this.allServices));
    }

  }

  ngOnInit(): void {
    
  }

}
