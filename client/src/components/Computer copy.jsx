import AdminNav from "./Adminnav"
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const computers=()=>{
    const [variants,setVariants]=useState([])
    const [data,setData]=useState([])
    const [computer,setcomputer]=useState({
        "id":"",
        "modelyear":"",
        "varid":""
    })
    const history=useHistory()
    useEffect(()=>{
        axios.get('http://localhost:5000/api/variants')
        .then(resp=>{
            setVariants(resp.data)
        })     
        loadData()   
    },[])

    const handleInput=e=>{
        setcomputer({...computer,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/computers',computer)
        .then(resp=>{
            toast.success(resp)
            setcomputer({
              "id":"",
              "modelyear":"",
              "varid":""
            })
            loadData()
        })
        .catch(error=>{
            toast.error(error)
        })
    }

    const handleFilter=id=>{
      if(id==0){
        loadData()
      }else{
        axios.get('http://localhost:5000/api/computers/filter/'+id)
        .then(resp=>{
          setData(resp.data)
        })
      }

    }

    const handleDelete=(id)=>{
        const resp=window.confirm('Are you sure you want to delete this computer ?')
        if(resp){
          axios.delete('http://localhost:5000/api/computers/'+id)
          .then(resp=>{
            toast.success(resp.data)
            loadData()
          })
          .catch(error=>{
            toast.error('computer already used in bookings')
          })
        }
    }

    const loadData=()=>{
        axios.get('http://localhost:5000/api/computers')
        .then(resp=>{
            setData(resp.data)
        })
    }
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <AdminNav />
                </div>
                <div className="col-sm-10">                    
                    <div className="row">
  <div className="col-sm-8">
    <div className="form-inline float-right mt-1 mr-2">
      <label className="mr-2">Filter</label>
      <select onChange={e=>handleFilter(e.target.value)} className="form-control form-control-sm" style={{width: 200}}>
        <option value="0">All computers</option>
        <option value="1">Available</option>
        <option value="2">Not Available</option>
      </select>
    </div>
    <h5 className="p-2 mb-3" style={{borderBottom: '2px solid green'}}>computers</h5>
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th>computer No</th>
          <th>Model Year</th>
          <th>Variant</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {data.map((x,index)=>(
        <tr key={index}>
          <td>{x.id}</td>
          <td>{x.modelyear}</td>
          <td>{x.variant.title}</td>
          <td>{x.status}</td>
          <td>
              <button className="btn btn-danger btn-sm" onClick={e=>handleDelete(x.id)}>Delete</button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="col-sm-4">
    <div className="computerd">
      <div className="computerd-body">
        <h5>computer Details</h5>
        <form>
          <div className="form-group">
            <label>Select Variant</label>
            <select required className="form-control" name="varid" value={computer?.varid} onChange={handleInput} >
              <option value>-- Select Variant --</option> 
              {variants.map(x=>(                         
              <option key={x.id} value={x.id}>{x.title}</option>              
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>computer No</label>
            <input type="text" required className="form-control" value={computer?.id} onChange={handleInput} name="id" />
          </div>
          <div className="form-group">
            <label>Model Year</label>
            <input type="text" required className="form-control" value={computer?.modelyear} onChange={handleInput} name="modelyear" />
          </div>
          <Link to="/computers" className="btn btn-danger btn-sm float-right ml-2">Cancel</Link>
          <input type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm float-right" defaultValue="Save computer" />
        </form>                
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
        </>
    )
}

export default computers;