import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'native-ent-install'
})
export class NativeEnterpriseInstall {
  @Prop() pluginId: string;
  @Prop() variables?: string;

  render() {
    if (!this.pluginId) {
      return null;
    }

    return (
      <section>
        <h2 id="installation">
          <a href="#installation">Installation</a>
        </h2>
        <p>
          After following the one-time <stencil-route-link url="/docs/enterprise/setup"> setup steps</stencil-route-link>, simply install the plugin:
        </p>
        <strong>Cordova:</strong>
        <command-line>
          <command-prompt>{`ionic cordova plugin add @ionic-enterprise/${this.pluginId} ${this.variables}`}</command-prompt>
        </command-line>
        <strong>Capacitor:</strong>
        <command-line>
          <command-prompt>{`npm install @ionic-enterprise/${this.pluginId} ${this.variables}`}</command-prompt>
          <command-prompt>npx cap sync</command-prompt>
        </command-line>
      </section>
    );
  }
}
