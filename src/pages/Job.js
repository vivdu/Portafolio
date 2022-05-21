import { useParams } from "react-router-dom";
import { getJob } from '../jobs'
function Job(){
    const param=useParams();
    const job=getJob(parseInt(param.id));
    return (
        <div>
            <h2>{job.empresa}</h2>
        </div>
    )
}
export default Job;
