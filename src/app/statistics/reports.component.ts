import { Component, OnInit } from '@angular/core';
import { StatisticsDto } from '../models/statistics/StatisticsDto'

@Component({
  selector: 'app-statistics',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class StatisticsComponent implements OnInit {

  reports = {
    numberProvidedServices: 12,
    numberConsultants: 132,
    numberProjects: 34,
    numberOpportunitiesInvested: 6573,
    numberAvailableServices: 51,
    numberVisitors: 3290,
    volumeExecutedDeals:754680

  } as StatisticsDto 
  services!: string[];


  ngOnInit(): void {
  }
// for get every number from items in the report and convert them to array string
  getArrayImagesForNumber(number: number) {
    var arrayNumbers = number.toString().split('');

    let arrayImages: string[] = [];

    for (let item of arrayNumbers) {
      var imgNumber = this.getImageNumber(parseInt(item));

      if (imgNumber)// after get image will stor in arrayString for show them 
        arrayImages.push(imgNumber)

    }
    console.log(arrayImages);
    return arrayImages;
  }

// pass the number and return the right image
  getImageNumber(number: number) {
    var image = ""
    switch (number) {
      case 0:
        image = "/images/0.gif";
        break;
      case 1:
        image = "/images/1.gif";
        break;
      case 2:
        image = "/images/2.gif";
        break;
      case 3:
        image = "/images/3.gif";
        break;
      case 4:
        image = "/images/4.gif";
        break;
      case 5:
        image = "/images/5.gif";
        break;
      case 6:
        image = "/images/6.gif";
        break;
      case 7:
        image = "/images/7.gif";
        break;
      case 8:
        image = "/images/8.gif";
        break;
      case 9:
        image = "/images/9.gif";
        break;


      default: image;

    }
    return image

  }

}
