import React,{ Component } from 'react';
import { myContext } from '../store/reducer'

export const connectHoc = (mapStateToProps, mapDispatchToProps) => {
  return function HOCFactory(WrappedComponent) {
    class Hoc extends Component {
      render() {
        return (
          <myContext.Consumer>
            {({state, dispatch}) => (
              <WrappedComponent {...this.props} {...mapStateToProps(state)} {...mapDispatchToProps(dispatch)}/>
            )}
          </myContext.Consumer>
        )
      }
    }
    return Hoc;
  }
}