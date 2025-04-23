import {DocTopHeader} from "../../../src/components/DocTopHeader";
import {DocLink} from "../../../src/components/DocLink";
import {CodeBlock} from "../../../src/components/DocCodeBlock";

export default function () {
    return <div className="overflow-y-auto">
        <DocTopHeader text="Docker"/>
        <span className="text-white">The official Docker image is available on <DocLink href="https://hub.docker.com/r/etherpad/etherpad" children="Etherpad Docker link"/>.</span>

        <DocTopHeader text="Downloading from DockerHub"/>
        <span className="text-white">If you are ok downloading a <DocLink href="https://hub.docker.com/r/etherpad/etherpad" children="prebuilt image from Docker Hub"/>, these are the commands:</span>


        <CodeBlock lang={"bash"}>
            {
                [
                    '# gets the latest published version',
                    'docker pull etherpad/etherpad',
                    '',
                    '# gets a specific version',
                    'docker pull etherpad/etherpad:1.8.0'
                ].join('\n')
            }
        </CodeBlock>
        <DocTopHeader text="Build a personalized container"/>
        <p className="text-white">
            If you want to use a personalized settings file, you will have to rebuild your image. All of the following instructions are as a member of the docker group. By default, the Etherpad Docker image is built and run in production mode: no development dependencies are installed, and asset bundling speeds up page load time.
        </p>

        <DocTopHeader text="Rebuilding with custom settings"/>
        <p className="text-white">
            Edit <code>&lt;<span>BASEDIR</span>/&gt;/settings.json.docker</code> at your will. When rebuilding the image, this file will be copied inside your image and renamed to settings.json.

            Each configuration parameter can also be set via an environment variable, using the syntax <code>$&#123;ENV_VAR&#125;</code>  or <code>&#36;&#123;ENV_VAR&#58;default_value&#125;</code>. For details, refer to settings.json.template.
        </p>

        <DocTopHeader text="Rebuilding including some plugins"/>
        <p className="text-white">
            If you want to install some plugins in your container, it is sufficient to list them in the ETHERPAD_PLUGINS build variable. The variable value has to be a space separated, double quoted list of plugin names (see examples).

            Some plugins will need personalized settings. Just refer to the previous section, and include them in your custom <code>settings.json.docker</code>.
        </p>

        <DocTopHeader text="Rebuilding including export functionality for DOC/PDF/ODT"/>
        <p  className="text-white">
            If you want to be able to export your pads to DOC/PDF/ODT files, you can install either Abiword or Libreoffice via setting a build variable.
        </p>

        <DocTopHeader text="Via Abiword"/>
        <p  className="text-white">
            For installing Abiword, set the INSTALL_ABIWORD build variable to any value.

            Also, you will need to configure the path to the abiword executable via setting the abiword property in <code>&lt;<span>BASEDIR</span>/&gt;/settings.json.docker</code> to <code>/usr/bin/abiword</code> or via setting the environment variable <code>ABIWORD</code> to <code>/usr/bin/abiword</code>.
        </p>
        <DocTopHeader text="Via Libreoffice"/>

        <p className="text-white">
            For installing Libreoffice instead, set the INSTALL_SOFFICE build variable to any value.

            Also, you will need to configure the path to the libreoffice executable via setting the soffice property in <code>&lt;<span>BASEDIR</span>/&gt;/settings.json.docker</code> to <code>/usr/bin/soffice</code> or via setting the environment variable <code>SOFFICE</code> to <code>/usr/bin/soffice</code>.
        </p>

        <DocTopHeader text="Examples"/>
        <p className="text-white">
            Build a Docker image from the currently checked-out code:
        </p>

        <CodeBlock lang="bash">
            {
                [
                    'docker build --tag <YOUR_USERNAME>/etherpad .'
                ].join('\n')
            }
        </CodeBlock>

        <p className="text-white">
            Include two plugins in the container:
        </p>
        <CodeBlock lang="bash">
            {
                [
                    'docker build --build-arg ETHERPAD_PLUGINS="ep_comments_page ep_author_neat" --tag <YOUR_USERNAME>/etherpad .'
                ].join("\n")
            }
        </CodeBlock>

        <DocTopHeader text="Running your instance:"/>
        <p className="text-white">
            To run your instance:
        </p>
        <CodeBlock lang="bash">
            {
                [
                    'docker run --detach --publish <DESIRED_PORT>:9001 <YOUR_USERNAME>/etherpad'
                ].join("\n")
            }
        </CodeBlock>
        <p className="text-white">
            And point your browser to <code>http://&lt;YOUR_IP&gt;:&lt;DESIRED_PORT&gt;</code>
        </p>

        <DocTopHeader text="Options available by default"/>
        <p className="text-white">
            The <code>settings.json.docker</code> available by default allows to control almost every setting via environment variables.
        </p>

        <DocTopHeader text="General"/>
        <p className="text-white">
            <table>
                <thead>
                    <tr>
                       <th>Variable</th>
                       <th>Description</th>
                       <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><code>TITLE</code></td>
                    <td>The name of the instance</td>
                    <td>Etherpad</td>
                </tr>
                <tr>
                    <td><code>FAVICON</code></td>
                    <td>favicon default name, or a fully specified URL to your own favicon</td>
                    <td>favicon.ico</td>
                </tr>
                <tr>
                    <td><code>DEFAULT_PAD_TEXT</code></td>
                    <td>The default text of a pad</td>
                    <td>Welcome to Etherpad! This pad text is synchronized as you type, so that everyone viewing this page sees the same text. This allows you to collaborate seamlessly on documents! Get involved with Etherpad at https://etherpad.org</td>
                </tr>
                <tr>
                    <td><code>IP</code></td>
                    <td>IP which etherpad should bind at. Change to <code>::</code> for IPv6</td>
                    <td><code>0.0.0.0</code></td>
                </tr>
                <tr>
                    <td><code>PORT</code></td>
                    <td>port which etherpad should bind at</td>
                    <td><code>9001</code></td>
                </tr>
                <tr>
                    <td><code>ADMIN_PASSWORD</code></td>
                    <td>the password for the <code>admin</code> user (leave unspecified if you do not want to create it)</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>USER_PASSWORD</code></td>
                    <td>the password for the first  <code>user</code> (leave unspecified if you do not want to create it)</td>
                    <td></td>
                </tr>
                </tbody>
            </table>


            <DocTopHeader text="Database"/>
            <table>
                <thead>
                <tr>
                    <th>Variable</th>
                    <th>Description</th>
                    <th>Default</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><code>DB_TYPE</code></td>
                    <td>a database supported by <DocLink href="https://www.npmjs.com/package/ueberdb2"
                                                         children="https://www.npmjs.com/package/ueberdb2"/></td>
                    <td>not set, thus will fall back to <code>DirtyDB</code> (please choose one instead)</td>
                </tr>
                <tr>
                    <td><code>DB_HOST</code></td>
                    <td>the host of the database</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_PORT</code></td>
                    <td>the port of the database</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_NAME</code></td>
                    <td>the database name</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_USER</code></td>
                    <td>a database user with sufficient permissions to create tables</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_PASS</code></td>
                    <td>the password for the database username</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_CHARSET</code></td>
                    <td>the character set for the tables (only required for MySQL)</td>
                    <td></td>
                </tr>
                <tr>
                    <td><code>DB_FILENAME</code></td>
                    <td>in case <code>DB_TYPE</code> is DirtyDB or sqlite, the database file.</td>
                    <td><code>var/dirty.db</code>, <code>var/etherpad.sq3</code></td>
                </tr>
                </tbody>
            </table>
        </p>
        <p className="text-white">
            If your database needs additional settings, you will have to use a personalized settings.json.docker and rebuild the container (or otherwise put the updated settings.json inside your image).
        </p>
        <DocTopHeader text="Pad Options"/>

    </div>
}
