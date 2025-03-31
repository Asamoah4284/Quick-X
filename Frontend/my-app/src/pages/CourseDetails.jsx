import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { courseId } = useParams();

  return (
    <div className="course-details">
      <h1>Course Details</h1>
      {/* Add course details content here */}
    </div>
  );
}

export default CourseDetails; 