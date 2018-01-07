$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/CristyTarantino.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {
    let $badges = $('#badges');

    for (let course of courses) {
      console.log(course);
      let $course = $('<div />', { 'class': 'course'}).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        'class': 'btn btn-primary',
        target: '_blank',
        text: 'See Course'
      }).appendTo($course);
    }
  }
});
