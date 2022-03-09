import http from './base-http-service';

const contestantList = () => http.get('/contestants/').then(response => response.data);

const newContestant = ( contestant ) => http.post('/contestants/', contestant).then(response => response.data);

const editContestant = ( id, contestant ) => http.put(`/contestants/${id}`, contestant).then(response => response.data);

const deleteContestant = ( id ) => http.get(`/contestants/${id}`).then(response => response.data)

export default {
    contestantList,
    newContestant,
    editContestant,
    deleteContestant
}