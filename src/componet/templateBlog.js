import { Link } from "react-router-dom";
const TemplateBlog = (props) => {
    return (
        <>
          <section key={props.slug} className="card">
            <img src={props.img} alt={props.title} />
            <div className="card-content">
              <h2>
                {props.title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{props.date}</span>
              </h2>
              <p>{props.content.substring(0, 200)}...</p>
              <Link to={`/${props.slug}`}>Leer Blog Completo...</Link>
            </div>
          </section>
        
      </>
    )
}

export default TemplateBlog
