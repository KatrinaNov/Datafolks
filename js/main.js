$( document ).ready(function() {
  // modal
  $('#modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget).closest(".card");
    var title = button.children('.card-img-overlay').children('.card-title').text();
    var descr = button.children('.card__description').text();
    var imgSrc = button.children('.card-img').attr('src');
    var imgAlt = button.children('.card-img').attr('alt');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body .description').text(descr);
    modal.find('.modal-body img').attr({
      src: imgSrc,
      alt: imgAlt
        });
  })
  // collapse
  $('#collapse').on('show.bs.collapse', function () {
    $('.project__btn').text('Скрыть');
  });
  $('#collapse').on('hidden.bs.collapse', function () {
    $('.project__btn').text('Звгрузить еще');
  });
});