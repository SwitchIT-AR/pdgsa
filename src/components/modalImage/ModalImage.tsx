const ModalImage = ({ src, alt, id }: {src: string, alt: string, id: string}) => {
  return (
    <div className="modal fade" id={id} role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <img className="d-block w-100" src={src} alt={alt} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
};

export default ModalImage;
