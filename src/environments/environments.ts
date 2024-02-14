import { HttpHeaders } from "@angular/common/http"

export const enviroments = {
  baseUrl: 'https://api.themoviedb.org/3'
}

const bearer_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzllMGNkMTYyMzEyYzJhNDE2YzhmYjU2MGVkYmQ4OCIsInN1YiI6IjY1Y2I5NDQ3OGMzMTU5MDE3YzM5NGQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmX101kS5fdnbR8UaMdDBAuN5u0sibrOvC52ctQALIc'

export const FILM_HEADER = new HttpHeaders({
  'Authorization': `Bearer ${bearer_token}`,
  'Content-Type': 'application/json'
})
