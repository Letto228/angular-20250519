import {CanDeactivateFn} from '@angular/router';

export const canDeactivateTestGuard: CanDeactivateFn<unknown> = (
    _component,
    _currentRoute,
    _currentState,
    _nextState,
) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    return confirm('Разрешить покинуть данную страницу?');
};
