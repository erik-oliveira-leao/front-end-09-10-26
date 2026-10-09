// data.js
const events = [
    { id: '1', name: 'Tech Summit 2024', date: '2024-05-20', speakerIds: ['1', '2'], locationId: '1' },
    { id: '2', name: 'Data Science Conference', date: '2024-06-15', speakerIds: ['3'], locationId: '2' },
];

const speakers = [
    { id: '1', name: 'Alice Santos', expertise: 'AI and Machine Learning' },
    { id: '2', name: 'Carlos Silva', expertise: 'Blockchain' },
    { id: '3', name: 'Mariana Costa', expertise: 'Data Science' },
];

const locations = [
    { id: '1', name: 'Auditorio Principal', city: 'São Paulo' },
    { id: '2', name: 'Centro de Convenções', city: 'Rio de Janeiro' },
];

module.exports = { events, speakers, locations };
