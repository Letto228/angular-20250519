import {bootstrapApplication} from '@angular/platform-browser';
import {inject, InjectionToken, Injector} from '@angular/core';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

function testDI() {
    // Bad practics
    // const token = 123;
    // const token = 'User';
    // const token = true;

    // Norm practics
    // const token = {};

    // Best practics
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class Token {
        constructor() {
            // eslint-disable-next-line no-console
            console.log('Created Token');
        }
    }

    const token = new InjectionToken('My token');
    const copyToken = new InjectionToken('Copy token');
    const universalToken = new InjectionToken('Universal token');

    // @Injectable()
    // class User {
    //     constructor(@Inject(token) readonly name: string) {
    //         console.log('Created', this.name);
    //     }
    // }

    class User {
        readonly name = inject(token);

        constructor() {
            // eslint-disable-next-line no-console
            console.log('Created', this.name);
        }
    }

    const injector = Injector.create({
        providers: [
            // {
            //     provide: User, // token
            //     useClass: User,
            // },
            User,
            // {
            //     provide: Token, // token
            //     useClass: User,
            // },
            // {
            //     provide: Token, // token
            //     useClass: Token,
            // },
            // Token,
            {
                provide: token, // token
                useValue: 'Egor',
            },
            // {
            //     provide: token, // token
            //     useValue: 'Alex',
            // },
            {
                provide: copyToken,
                // useExisting: token,
                useExisting: User,
                // useClass: User,
            },
            {
                provide: universalToken,
                // useFactory: () => 'Egor',
                // useFactory: () => new User(),
                // useFactory: () => inject(User),
                useFactory: () => inject(User).name,
            },
        ],
    });

    setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(injector.get(universalToken));
        // console.log(injector.get(User));
        // console.log(injector.get(copyToken));
        // console.log(injector.get(User) === injector.get(copyToken));
        // eslint-disable-next-line no-console
        console.log(injector.get(User) === injector.get(universalToken));
    }, 3000);
}

testDI();
