import axios from 'axios'
import { toast } from 'react-toastify'

const apiUrl = 'https://squaredup-dashboard-api.herokuapp.com/'

export const getActiveUsers = async(query:string) =>{
  try {
   const {data} = await axios.get(`${apiUrl}api/overview/active-user/?q=${query}`) 
  return data.users 
  } catch (error) {
    toast('Unable to fetch active users, try again later')
  } 
}

export const getJobs = async(startDate:string) =>{
  try {
    const {data} = await axios.get(`${apiUrl}api/overview/job-count/?startDate=${startDate}`) 
    return data.jobs
  } catch (error) {
    toast('Unable to fetch jobcounts, try again later')
  } 
  }

  export const getResumes = async(startDate:string) =>{
    try {
      const {data} = await axios.get(`${apiUrl}api/overview/resume-count/?startDate=${startDate}`) 
    return data.resume
    } catch (error) {
      toast('Unable to fetch resumecount, try again later')
    }
  }

  export const getCL = async(startDate:string) =>{
    try {
       const {data} = await axios.get(`${apiUrl}api/overview/cl-count/?startDate=${startDate}`) 
    return data.cl
    } catch (error) {
      toast('Unable to fetch coverlettercount, try again later')
    }
  }

  export const getSharedAndUnsharedResumes = async() =>{
    try {
     const {data} = await axios.get(`${apiUrl}api/overview/resume`) 
    return data 
    } catch (error) {
      toast('Unable to fetch resume details, try again later')
    }
  }

  export const trendingRoles = async() =>{
    try {
     const {data} = await axios.get(`${apiUrl}api/overview/roles`) 
    return data.roles 
    } catch (error) {
      toast('Unable to fetch trending roles, try again later')
    }
  }

  export const getGuestsAndVerifiedUsers = async(q:string) =>{
    try {
      const {data} = await axios.get(`${apiUrl}api/overview/user-metric/?q=${q}`) 
    return data.data
    } catch (error) {
      toast('Unable to fetch user details, try again later')
    }
  }
