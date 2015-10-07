// Instantiate a new instance of the infobox
var infobox = new InfoboxTemplateBuilder({});

// alias the infobox data model for easier handling
var infoData = infobox.data;

// Create a new field
var title = infoData.newElement('Field', {
	defaultValue: 'Dang',
	label: 'Who let the dogs out?',
	boundVariableName: 'foo'
});

// And add it to the infobox data model instance
infoData.add(title);

// Or create a new group, with that field
var group = infoData.newElement('Group', {
	items: [title]
});

// Add more fields to that group
group.add(infoData.newElement('Image', {
	defaultValue: 'dang.png',
	label: 'Avatar',
	boundVariableName: 'bar'
}));

// and finally add that group to the infobox data instance
infoData.add(group);