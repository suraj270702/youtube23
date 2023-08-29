import React from 'react'
import './MyGigs.scss'
import { Link } from 'react-router-dom'
import deleteimg from '../../img/delete.png'
const MyGigs = () => {
  return (
    <div className='gigs'>
        <div className="container">
            <div className="title">
                <h1>Donation Requests</h1>
                <Link to="/add" className='link button'>Add A New Request</Link>
            </div>
            <table>
                <tr>
                    <th>Donation Request Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Help Requests </th>
                    <th>Action</th>

                </tr>
                <tr>
                    <td><img className='img' src='https://img.freepik.com/premium-vector/volunteers-box-concept_118813-4962.jpg'/></td>
                    <td>Food Donation</td>
                    <td>Description</td>
                    <td>5</td>
                    <td>
                        <img className='deletebutton' src={deleteimg} />
                    </td>
                </tr>
                <tr>
                    <td><img className='img' src='https://img.freepik.com/premium-vector/volunteers-box-concept_118813-4962.jpg'/></td>
                    <td>Food Donation</td>
                    <td>Description</td>
                    <td>5</td>
                    <td>
                        <img className='deletebutton' src={deleteimg} />
                    </td>
                </tr>
                <tr>
                    <td><img className='img' src='https://img.freepik.com/premium-vector/volunteers-box-concept_118813-4962.jpg'/></td>
                    <td>Food Donation</td>
                    <td>Description</td>
                    <td>5</td>
                    <td>
                        <img className='deletebutton' src={deleteimg} />
                    </td>
                </tr>
                <tr>
                    <td><img className='img' src='https://img.freepik.com/premium-vector/volunteers-box-concept_118813-4962.jpg'/></td>
                    <td>Food Donation</td>
                    <td>Description</td>
                    <td>5</td>
                    <td>
                        <img className='deletebutton' src={deleteimg} />
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default MyGigs