import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './AddMovie.css'

function AddMovie() {
    const navigate = userNavigate()
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rating: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post('/movies', formData)
            alert('Movie added successfully')
            navigate('/movies')
        } catch (error) {
            console.error('Error adding movie:', error)
            alert('Error adding movie')
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='add-movie-page'>
            <div className='container'>
                <h1>Add New Movie</h1>
                <form onSubmit={handleSubmit} className='movie-form'>
                    <input placeholder='Title' name='title' onChange={handleChange} required />
                    <input placeholder='Year' name='year' onChange={handleChange} required />
                    <input placeholder='Genre' name="genre" onChange={handleChange} required />
                    <input placeholder='Description' name="description" onChange={handleChange} required />
                    <button type="submit" className='submit-btn'>Save Movie</button>
                </form>
            </div>
        </div>
    )
}

export default AddMovie