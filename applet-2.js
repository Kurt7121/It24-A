class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
        
        this.attendanceCountTEP = 0;
        this.attendanceCountCSS = 0;
        this.attendanceCountBA = 0;
        this.markerCounts = {};
        this.markers = [];
        this.loggedData = []; 
