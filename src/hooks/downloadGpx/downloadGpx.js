// @flow

import { useWayPoints } from "../";

export default function useDownloadGpx() {
  const [wayPoints] = useWayPoints();

  let gpxTemplate = `<gpx creator="Route Builder" version="1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.topografix.com/GPX/1/0" xsi:schemaLocation="http://www.topografix.com/GPX/1/0 http://www.topografix.com/GPX/1/0/gpx.xsd"><name>Sierras de cordoba Route</name>`;

  for (const wp of wayPoints) {
    gpxTemplate = gpxTemplate.concat(
      `<wpt lat="${wp.x}" lon="${wp.y}"><name>${wp.name}</name></wpt>`
    );
  }

  gpxTemplate = gpxTemplate.concat("</gpx>");

  function download() {
    const link = document.createElement("a");

    const date = new Date();
    const formattedDate = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`;

    const filename = `Route_${formattedDate}.gpx`;
    const file = new Blob([gpxTemplate], { type: "text/plain" });

    link.setAttribute("href", window.URL.createObjectURL(file));
    link.setAttribute("download", filename);

    link.dataset.downloadurl = ["text/plain", link.download, link.href].join(
      ":"
    );

    link.click();
  }

  return download;
}
