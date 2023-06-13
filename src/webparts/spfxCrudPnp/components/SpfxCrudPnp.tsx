import * as React from 'react';
// import styles from './SpfxCrudPnp.module.scss';
import { ISpfxCrudPnpProps } from './ISpfxCrudPnpProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import Form from './Form';
// import { sp } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/items";

export default class SpfxCrudPnp extends React.Component<ISpfxCrudPnpProps, {}> {
  public render(): React.ReactElement<ISpfxCrudPnpProps> {
    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    // } = this.props;

    return (
      <div><Form/></div>

      
        
    
      //
      // <section className={`${styles.spfxCrudPnp} ${hasTeamsContext ? styles.teams : ''}`}>
      //   <div className={styles.welcome}>
      //     <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
      //     <h2>Well done, {escape(userDisplayName)}!</h2>
      //     <div>{environmentMessage}</div>
      //     <div>Web part property value: <strong>{escape(description)}</strong></div>
      //   </div>
      //   <div>
      //     <h3>Welcome to SharePoint Framework!</h3>
      //     <p>
      //       The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
      //     </p>
      //     <h4>Learn more about SPFx development:</h4>
      //     <ul className={styles.links}>
      //       <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
      //       <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
      //     </ul>
      //   </div>
      // </section>
    );
    
  }
//   private  createItem = async () => {
//     try {
//       const addItem = await sp.web.lists.getByTitle("Task1Employee").items.add({
//         'EmployeeID': document.getElementById("ElementID")['value'],
//         'ElementName': document.getElementById("EmployeeName")['value'],
//         'Fresher': document.getElementById("Fresher")['value'],
//         'Designation': document.getElementById("Designation")['value'],
//         'Salary': document.getElementById("Salary")['value'],

//       });
//       console.log(addItem);
//       alert(`Item created successfully with ID: ${addItem.data.ID}`);
//     }
//     catch (e) {
//       console.error(e);
//     }

// }
}