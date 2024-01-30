document.addEventListener('DOMContentLoaded', function () {
  const videoLinks = [
    'https://www.youtube.com/watch?v=n2RNcPRtAiY',
    'https://www.youtube.com/watch?v=mP0RAo9SKZk',
    'https://www.youtube.com/watch?v=FgjPQQeTh1w',
    'https://www.youtube.com/watch?v=094y1Z2wpJg',
    'https://www.youtube.com/watch?v=86CQq3pKSUw',
    'https://www.youtube.com/watch?v=yXWw0_UfSFg',
    'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
    'https://www.youtube.com/watch?v=lFm4EM1juls',
    'https://www.youtube.com/watch?v=ixmxOlcrlUc',
    'https://www.youtube.com/watch?v=R2vXbFp5C9o',
    'https://www.youtube.com/watch?v=0nZuYyXET3s',
    'https://www.youtube.com/watch?v=9iMGFqMmUFs',
  ];

  const videoPreviews = document.querySelectorAll('.video-preview');

  videoPreviews.forEach((preview, index) => {
    preview.addEventListener('click', function () {
      window.open(videoLinks[index]);
    });
  });
});
