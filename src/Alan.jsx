import {useEffect, useContext} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { selectGenreOrCategory, searchMovie } from './features/currentGenreOrCategory';
import { ColorModeContext } from './utils/ToggleColorMode'
import { fetchToken } from './utils';



const useAlan = () => {
    const { setmode } = useContext(ColorModeContext)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        alanBtn({
            key: '22e1433d8c178923127720f2cb1e35d22e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command, mode, genres,  genreOrCategory, query}) => {
                if(command === 'chooseGenre'){
                    const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase())

                    if(foundGenre){
                      history.push('/')
                      dispatch(selectGenreOrCategory(foundGenre.id)) 
                    } else {
                        const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory
                        history.push('/')
                        dispatch(selectGenreOrCategory(category))
                    }
                }
                else if(command === 'changeMode'){
                    if(mode === 'light'){
                        setmode('light')
                    }else{
                        setmode('dark')
                    }
                }else if (command === 'login'){
                    fetchToken()
                }else if ( command === 'logout'){
                    localStorage.clear()
                    history.push('/')
                }else if (command === 'search'){
                    dispatch(searchMovie(query))
                }
              
            }
        });
      }, []);
}

export default useAlan