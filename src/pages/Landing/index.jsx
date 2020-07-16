import React from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import ReactGoogleMap from "components/ReactGoogleMap";
import MapBox from "components/MapBox";
import GoogleMap from "components/GoogleMap";

export default function Landing({ currentTheme }) {
  return (
    <div>
      <TabPanel value={0}>
        <GoogleMap />
      </TabPanel>
      <TabPanel value={1}>
        <MapBox currentTheme={currentTheme} />
      </TabPanel>
      <TabPanel value={2}>
        <ReactGoogleMap />
      </TabPanel>
    </div>
  );
}
