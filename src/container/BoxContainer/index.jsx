export default function BoxContainer({ children }) {
  return (
    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">
      {children}
    </div>
  );
}
