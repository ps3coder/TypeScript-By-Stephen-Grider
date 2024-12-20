// import { User } from './User';
// import { Company } from './Company';


export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color: string;
}


export class CustomMap {
    private googleMap: google.maps.Map;
    // we cant access outside the class
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        })
    }

    // addCompanyMarker(company: Company) {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,

    //         }
    //     })
    // }
}