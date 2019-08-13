//top-left reference point
export class LagLngXY {
    pMin = {
        scrX: 0,
        scrY: 0,
        lat: null,
        lng: null,
        pos: null,
        perX: null,
        perY: null
    }
    //bottom-right reference point
    pMax = {
        scrX: 1024,
        scrY: 780,
        lat: null,
        lng: null,
        pos: null,
        perX: null,
        perY: null
    }
    radius = 6.371;

    latlngToGlobalXY(lat, lng) {
        let x = this.radius * lng * Math.cos((this.pMin.lat + this.pMax.lat) / 2);
        let y = this.radius * lat;
        return { x: x, y: y }
    }
    constructor(pMinLat,pMinLng,pMaxLat,pMaxLng) {
        this.pMax.lat = pMaxLat
        this.pMax.lng = pMaxLng
        this.pMin.lat = pMinLat
        this.pMin.lng = pMinLng
        this.pMin.pos = this.latlngToGlobalXY(this.pMin.lat, this.pMin.lng);
        this.pMax.pos = this.latlngToGlobalXY(this.pMax.lat, this.pMax.lng);
    }

    latlngToScreenXY(lat, lng) {
        let pos = this.latlngToGlobalXY(lat, lng);

        pos['perX'] = ((pos.x - this.pMin.pos.x) / (this.pMax.pos.x - this.pMin.pos.x));
        pos['perY'] = ((pos.y - this.pMin.pos.y) / (this.pMax.pos.y - this.pMin.pos.y));
        return {
            x: ((this.pMin.scrX + (this.pMax.scrX - this.pMin.scrX) * pos['perX']) - this.pMax.scrX) *-1,
            y: this.pMin.scrY + (this.pMax.scrY - this.pMin.scrY) * pos['perY']
        }
    }
    getBobxConnors():[number[],number[]]{
        return [[this.pMin.lat,this.pMin.lng],[this.pMax.lat,this.pMax.lng]]
    }
}
