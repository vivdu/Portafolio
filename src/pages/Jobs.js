import Navbar from '../components/Navbar';
import { getAlljobs } from '../jobs';
import { Link } from 'react-router-dom';

function Jobs (){
    const jobs=getAlljobs()
    return (
        <div>
        <Navbar />
        {jobs.map(job =>
            <div key={job.id} className="jobs">
                {job.email}
                <Link to={`${job.id}`}>ver más</Link>
                </div>
            )};
        <h1>Jobs</h1>

        </div>
    )
}
export default Jobs;