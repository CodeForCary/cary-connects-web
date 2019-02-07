import React from "react";

//Material-UI
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Material icons
import AccessibleIcon from "@material-ui/icons/Accessible";
import ParkingIcon from "@material-ui/icons/LocalParking";
import RestrictionsIcon from "@material-ui/icons/NotInterested";
import CommuteIcon from "@material-ui/icons/Commute";
import PhoneIcon from "@material-ui/icons/Phone";
import AddressIcon from "@material-ui/icons/Place";
import WebsiteIcon from "@material-ui/icons/Launch";
import NoteIcon from "@material-ui/icons/Note";

/**
 *
{active: "TRUE"
address: "220 W. Chatham Street, Cary, NC 27511"
hocamember: "TRUE"
marker-color: "#0433ff"
marker-size: "medium"
marker-symbol: "bakery"
name: "La Farm Bakery"
note: "Bakery & Cafe"
phone: "919-650-3117"
website: "www.lafarmbakery.com"} theme
 */

function pullOutLink(info) {
  if (info.includes("http")) {
    const linkStart = info.search("http");
    var restOfText = info.substr(0, linkStart);
    if (restOfText[restOfText.length - 1] === ":" || restOfText[restOfText.length - 2] === ":") {
      restOfText = restOfText.substr(0, restOfText.length - 2);
    }
    return (
      <a target='_blank' href={info.substr(linkStart, info.length)} rel='noopener noreferrer'>
        <strong>{restOfText}</strong>
      </a>
    );
  } else {
    return info;
  }
}

const ListItemEl = props => {
  let icon;
  switch (props.icon) {
    case "accessible":
      icon = <AccessibleIcon />;
      break;
    case "parking":
      icon = <ParkingIcon />;
      break;
    case "restrictions":
      icon = <RestrictionsIcon />;
      break;
    case "directions":
      icon = <CommuteIcon />;
      break;
    case "website":
      icon = <WebsiteIcon />;
      break;
    case "address":
      icon = <AddressIcon />;
      break;
    case "phone":
      icon = <PhoneIcon />;
      break;
    case "note":
      icon = <NoteIcon />;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </React.Fragment>
  );
};

export const dataList = data => {
  const arr = [];
  let id = 0;

  for (let key in data) {
    let item;
    let text;
    //replace -1 values with 'none'
    if (data[key] === -1) {
      text = "None";
    } else {
      text = data[key];
    }

    switch (key) {
      case "hcParking":
        item = <ListItemEl icon='accessible' text={`Accessible: ${text}`} key='accessible' />;
        arr.push(item);
        id++;
        break;
      case "stdParking":
        item = (
          <ListItemEl icon='parking' text={`Standard Spaces: ${text}`} key='parking' id={id} />
        );
        arr.push(item);
        id++;
        break;
      case "restrictions":
        item = (
          <ListItemEl
            icon='restrictions'
            text={`Restrictions: ${text}`}
            key='restrictions'
            id={id}
          />
        );
        arr.push(item);
        id++;
        break;
      case "address":
        item = <ListItemEl icon='address' text={`${text}`} key='Address' id={id} />;
        arr.push(item);
        id++;
        break;
      case "phone":
        item = (
          <ListItemEl
            icon='phone'
            text={
              <div>
                <a href={"tel:" + text}>{text}</a>
              </div>
            }
            key='Phone'
            id={id}
          />
        );
        arr.push(item);
        id++;
        break;
      case "website":
        item = (
          <ListItemEl
            icon='website'
            text={
              <a target='blank' href={"http://" + text}>
                <strong>Website</strong>
              </a>
            }
            key='Website'
            id={id}
          />
        );
        arr.push(item);
        id++;
        break;
      case "note":
        item = <ListItemEl icon='note' text={pullOutLink(text)} key='Note' id={id} />;
        arr.push(item);
        id++;
        break;
      default:
        break;
    }
  }
  return arr;
};
