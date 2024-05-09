import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
  post: null,
  recentPosts: [],
  hasMore: true,
  index: 0,
  step: 11,
  createPostError: null,
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.createPostError = action.payload; // Adicione essa linha

    },

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    // GET POST INFINITE
    getPostsInitial(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    getMorePosts(state) {
      const setIndex = state.index + state.step;
      state.index = setIndex;
    },

    noHasMore(state) {
      state.hasMore = false;
    },

    // GET POST
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },

    // GET RECENT POST
    getRecentPostsSuccess(state, action) {
      state.isLoading = false;
      state.recentPosts = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;


// ----------------------------------------------------------------------

export function getAllPosts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/all');
      dispatch(slice.actions.getPostsSuccess(response.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPostsInitial(index, step, type, dashboard) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts', {
        params: { index, step, type , dashboard}
      });
      const results = response.data.results.length;
      const { maxLength } = response.data;

      dispatch(slice.actions.getPostsInitial(response.data.results));

      if (results >= maxLength) {
        dispatch(slice.actions.noHasMore());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPost(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title }
      });
      dispatch(slice.actions.getPostSuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getRecentPosts(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title }
      });
      dispatch(slice.actions.getRecentPostsSuccess(response.data.recentPosts));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// adicionar blog 

export function createPost(values) {
  console.log(
    values
  )

  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/api/blog/posts/adicionar`, {
        params: {
          dadosBlog: values.values,
          urlCapa: values.url,
          userId: values.user.uid,
          authorization: values.user.accessToken,
          edit:values.id
        }
      });
      console.log('response', response)
      dispatch(slice.actions.getRecentPostsSuccess(response.data.response.data.message));
      return initialState.error
    } catch (error) {
      console.error(error);
      console.log('erro mds ', error);
      dispatch(slice.actions.hasError(500, error));
      return true


    }
  };
}