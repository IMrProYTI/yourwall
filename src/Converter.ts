import showdown from 'showdown';

showdown.setOption('literalMidWordUnderscores', true);
showdown.setOption('noHeaderId', true);
showdown.setOption('strikethrough', true);
showdown.setOption('tables', true);
showdown.setOption('tasklists', true);
showdown.setOption('underline', true);

export default new showdown.Converter();