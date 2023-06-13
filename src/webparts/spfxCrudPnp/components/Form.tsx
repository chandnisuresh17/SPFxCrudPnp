// import { sp } from "@pnp/sp";
import * as React from "react";
import  styles from './SpfxCrudPnp.module.scss';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default function RequestForm() {
    const[Title,setTitle] = React.useState(" ")
    const [EmployeeID, setEmployeeID] = React.useState(0)
    const[EmployeeName, setEmployeeName] = React.useState("")
    // const[Fresher,setFresher] = React.useState(false)
    // const[Designation,setDesignation] = React.useState(" ")
    const[Salary,setSalary] = React.useState(" ")
    // const[show,setShow] = React.useState(false)

    const[empDetails, setEmpDetails] = React.useState([])

    //CreateItem

    const createReq = async ()=>{
        // let User{
      //   DisplayName:
      // }
      let batch = sp.web.createBatch()
      // let newReqList = sp.web.lists.getByTitle(reqList)
      await batch.execute().then((data)=>{
        let userData :any={};
        userData["Title"]=Title
        userData["EmployeeID"]=EmployeeID
        userData["EmployeeName"]=EmployeeName




      //   userData["Fresher"]=Fresher
          userData["Salary"]=Salary
          sp.web.lists.getByTitle("Task1Emp").items.add(userData).then((item)=>{
            alert("Request Submitted")
        }).catch((err)=>{
            console.log(err);
      
          })
        })
        }
        const submitRequest = async ()=>{
      
         await createReq()
      
      //    await handlePeoplePickerChange(name)
      
         
      
    //   console.log(name)
      }

      //ReadItem
      const createReadReq = async ()=>{
        const items: any[] = await sp.web.lists.getByTitle("Task1Emp").items.get();
        setEmpDetails(items)
        console.log("empdetails: ")
        console.log(empDetails)
        if (EmployeeID){
            console.log(empDetails[EmployeeID].EmployeeName)
        }
        
        // console.log(items);
    }
        const ReadRequest = async ()=>{
      
         await createReadReq()
        // console.log(name)
      
      }
   

      //UpdateItem
      const updateItem = async ()=>{
        
        
        // let User{
      //   DisplayName:
      // }
      let batch = sp.web.createBatch()
    //   let newReqList = sp.web.lists.getByTitle(reqList)
      await batch.execute().then((data)=>{
        let userData :any={};
        userData["Title"]=Title
        // userData["EmployeeID"]=EmployeeID
        userData["EmployeeName"]=EmployeeName
      //   userData["Fresher"]=Fresher
          userData["Salary"]=Salary
          sp.web.lists.getByTitle("Task1Emp").items.getById(EmployeeID).update(userData).catch((err)=>{
            console.log(err);
      
          })
        })
        }
        const updateRequest = async ()=>{
      
         await updateItem()
      
      //    await handlePeoplePickerChange(name)
      
         
      
    //   console.log(name)
      }
      //DeleteItem
      const deleteItem = async ()=>{
        
        
        // let User{
      //   DisplayName:
      // }
    //   let batch = sp.web.createBatch()
    // //   let newReqList = sp.web.lists.getByTitle(reqList)
    //   await batch.execute().then((data)=>{
    //     let userData :any={};
    //     userData["Title"]=Title
    //     // userData["EmployeeID"]=EmployeeID
    //     userData["EmployeeName"]=EmployeeName
    //   //   userData["Fresher"]=Fresher
    //       userData["Salary"]=Salary
          sp.web.lists.getByTitle("Task1Emp").items.getById(EmployeeID).delete().catch((err)=>{
            console.log(err);
      
          })
        
        }
        const deleteRequest = async ()=>{
      
         await deleteItem()
      
      //    await handlePeoplePickerChange(name)
      
         
      
      console.log(name)
      }
    
  
    
        return(
          
          
            <div className={styles.row}>
              <div className={styles.column}>

 
                 <div>
                {empDetails.map((emp) => {
                <h2>{emp.EmployeeName}</h2>
                })}
                </div> 

                <div className={styles.itemField}>
                <div className={styles.fieldLabel}>Title</div>
                <input onChange = {(e)=>setTitle(e.target.value)}type="text" id='Title'></input>
                
                  <div className={styles.fieldLabel}>EmployeeID</div>
                  <input onChange = {(e)=>setEmployeeID(e.target.valueAsNumber)}type="number" id='EmployeeId'></input>
                  </div>
                  </div>
                
                <div>
                <div className={styles.itemField}>
                  <div className={styles.fieldLabel}>EmployeeName</div>
                  <input onChange = {(e) => setEmployeeName(e.target.value)} type="text" id='EmployeeName'></input>
                </div>
                {/* <div className={styles.itemField}>
                  <div className={styles.fieldLabel}>Fresher</div>
                  <input onChange = {(e) => setFresher(e.target.checked)}type="checkbox" id='Fresher'></input>
                </div>
                 */}
                <div className={styles.itemField}>
                  <div className={styles.fieldLabel}>Designation</div> 
                  
                  
                  {/* <input   type="dropdown" id='Designation'></input> */}
                    {/* <select onChange = {(e) => setDesignation(e.target.value)} >
                        <option value="Developer">
                            Developer
                        </option>
                        <option value="Tester">Tester</option>
                        <option value="Tester">CyberSecurity</option>
                        <option value="Tester">D&A</option>
                    </select> */}
                  {/* <input  type="dropdown" ></input>
                  
                </div>
                <div className={styles.fieldLabel}>Salary</div>
                  <input onChange={(e) => setSalary(e.target.value)} type="text" id='Salary'></input>
                </div>div className={styles.itemField}>
                  
                {/* <div className={styles.itemField}>
                  <div className={styles.fieldLabel}>All Items:</div>
                  <div id="allItems"></div>
                </div> */}
                <div className={styles.fieldLabel}>Salary</div>
                  <input onChange={(e) => setSalary(e.target.value)} type="text" id='Salary'></input>
                <div className={styles.fieldLabel}>ID</div>
                  <input onChange = {(e)=>setEmployeeID(e.target.valueAsNumber)}type="number" id='EmployeeId'></input>
                  </div>
                  <div className={styles.button}>
                    <span className={styles.label} onClick={updateRequest}>Update</span>
                  </div>
                  </div>
                <div className={styles.buttonSection}>
                    
                <div className={styles.button}>
                  
                  <span className={styles.label} onClick={submitRequest}>Create</span>
                </div>

                
                  <div className={styles.button}>
                    <span className={styles.label} onClick={ReadRequest}>Read</span>
                  </div>
                  <div className={styles.button}>
                    <span className={styles.label} onClick={deleteRequest}>Delete</span>
                  </div>
                  
                 
                  
                  {/* <div className={styles.button}>
                    <span className={styles.label} onClick={this.getAllItems}>Read All</span>
                  </div>
                  
                  <div className={styles.button}>
                    <span className={styles.label} onClick={this.deleteItem}>Delete</span>
                  </div>
                </div>
              </div> */} 
            </div>
            
          </div>
          
          
          
        
        
    );
            }
            
        
    
            


